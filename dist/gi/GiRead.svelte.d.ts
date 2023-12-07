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
export type GiReadProps = typeof __propDef.props;
export type GiReadEvents = typeof __propDef.events;
export type GiReadSlots = typeof __propDef.slots;
export default class GiRead extends SvelteComponentTyped<GiReadProps, GiReadEvents, GiReadSlots> {
}
export {};
