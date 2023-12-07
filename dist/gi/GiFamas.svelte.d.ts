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
export type GiFamasProps = typeof __propDef.props;
export type GiFamasEvents = typeof __propDef.events;
export type GiFamasSlots = typeof __propDef.slots;
export default class GiFamas extends SvelteComponentTyped<GiFamasProps, GiFamasEvents, GiFamasSlots> {
}
export {};
