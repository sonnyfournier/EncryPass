#include "decryptwin.h"
#include <QApplication>

int         main(int ac, char **av)
{
    QApplication    app(ac, av);
    DecryptWin      win;

    win.show();
    return (app.exec());
}
