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
export type GiSpikedMaceProps = typeof __propDef.props;
export type GiSpikedMaceEvents = typeof __propDef.events;
export type GiSpikedMaceSlots = typeof __propDef.slots;
export default class GiSpikedMace extends SvelteComponentTyped<GiSpikedMaceProps, GiSpikedMaceEvents, GiSpikedMaceSlots> {
}
export {};
