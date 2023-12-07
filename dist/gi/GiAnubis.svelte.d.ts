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
export type GiAnubisProps = typeof __propDef.props;
export type GiAnubisEvents = typeof __propDef.events;
export type GiAnubisSlots = typeof __propDef.slots;
export default class GiAnubis extends SvelteComponentTyped<GiAnubisProps, GiAnubisEvents, GiAnubisSlots> {
}
export {};
