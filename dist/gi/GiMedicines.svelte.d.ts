import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type GiMedicinesProps = typeof __propDef.props;
export type GiMedicinesEvents = typeof __propDef.events;
export type GiMedicinesSlots = typeof __propDef.slots;
export default class GiMedicines extends SvelteComponentTyped<GiMedicinesProps, GiMedicinesEvents, GiMedicinesSlots> {
}
export {};
