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
export type GiFishhookForkProps = typeof __propDef.props;
export type GiFishhookForkEvents = typeof __propDef.events;
export type GiFishhookForkSlots = typeof __propDef.slots;
export default class GiFishhookFork extends SvelteComponentTyped<GiFishhookForkProps, GiFishhookForkEvents, GiFishhookForkSlots> {
}
export {};
