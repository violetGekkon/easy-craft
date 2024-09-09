export async function fetchManifest(): Promise<any> {
  const bffUrl = `${window.location.origin}/api/bff`
  try {
    const response = await fetch(`${bffUrl}/manifest`, {
      credentials: 'include',
    });

    if (!response.ok) {
      if (response.status === 401) {
        // Если 401, выполняем редирект на SSO
        const redirectUrl = window.location.origin;
        window.location.href = `${bffUrl}/login?redirect_uri=${encodeURIComponent(redirectUrl)}`;
      } else {
        throw new Error(`Failed to fetch manifest: ${response.statusText}`);
      }
    }
    // Возвращаем результат, если запрос успешен
    return await response.json();

  } catch (error) {
    console.error('Error fetching manifest:', error);
    throw error;
  }
}
