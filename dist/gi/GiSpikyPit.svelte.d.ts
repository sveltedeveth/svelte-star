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
export type GiSpikyPitProps = typeof __propDef.props;
export type GiSpikyPitEvents = typeof __propDef.events;
export type GiSpikyPitSlots = typeof __propDef.slots;
export default class GiSpikyPit extends SvelteComponentTyped<GiSpikyPitProps, GiSpikyPitEvents, GiSpikyPitSlots> {
}
export {};
