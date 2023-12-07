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
export type GiSolidLeafProps = typeof __propDef.props;
export type GiSolidLeafEvents = typeof __propDef.events;
export type GiSolidLeafSlots = typeof __propDef.slots;
export default class GiSolidLeaf extends SvelteComponentTyped<GiSolidLeafProps, GiSolidLeafEvents, GiSolidLeafSlots> {
}
export {};
