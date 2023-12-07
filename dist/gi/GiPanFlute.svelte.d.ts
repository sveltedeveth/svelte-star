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
export type GiPanFluteProps = typeof __propDef.props;
export type GiPanFluteEvents = typeof __propDef.events;
export type GiPanFluteSlots = typeof __propDef.slots;
export default class GiPanFlute extends SvelteComponentTyped<GiPanFluteProps, GiPanFluteEvents, GiPanFluteSlots> {
}
export {};
