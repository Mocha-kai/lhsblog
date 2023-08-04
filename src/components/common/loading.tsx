//날짜 변환용 함수
export const dateChange = (date: number) => {
    const insertDate = new Date(date);
    const cYear = insertDate.getFullYear();
    const cMonth = insertDate.getMonth() + 1;
    const cDate = insertDate.getDate();
    const cHours = insertDate.getHours();
    const cMinutes = insertDate.getMinutes();

    return `${cYear}.${cMonth >= 10 ? cMonth : '0' + cMonth}.${cDate >= 10 ? cDate : '0' + cDate} ${
        cHours >= 10 ? cHours : '0' + cHours
    }:${cMinutes >= 10 ? cMinutes : '0' + cMinutes}`;
};
