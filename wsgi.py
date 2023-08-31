import bjoern
from webapp import app


bjoern.listen(app, "0.0.0.0", 5000)
bjoern.run()
