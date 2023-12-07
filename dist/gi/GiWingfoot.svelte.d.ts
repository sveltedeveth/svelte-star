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
export type GiWingfootProps = typeof __propDef.props;
export type GiWingfootEvents = typeof __propDef.events;
export type GiWingfootSlots = typeof __propDef.slots;
export default class GiWingfoot extends SvelteComponentTyped<GiWingfootProps, GiWingfootEvents, GiWingfootSlots> {
}
export {};
