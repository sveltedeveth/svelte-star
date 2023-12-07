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
export type GiLibraProps = typeof __propDef.props;
export type GiLibraEvents = typeof __propDef.events;
export type GiLibraSlots = typeof __propDef.slots;
export default class GiLibra extends SvelteComponentTyped<GiLibraProps, GiLibraEvents, GiLibraSlots> {
}
export {};
