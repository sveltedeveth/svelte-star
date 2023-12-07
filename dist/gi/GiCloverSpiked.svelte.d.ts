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
export type GiCloverSpikedProps = typeof __propDef.props;
export type GiCloverSpikedEvents = typeof __propDef.events;
export type GiCloverSpikedSlots = typeof __propDef.slots;
export default class GiCloverSpiked extends SvelteComponentTyped<GiCloverSpikedProps, GiCloverSpikedEvents, GiCloverSpikedSlots> {
}
export {};
