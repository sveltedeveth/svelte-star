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
export type GiCookieProps = typeof __propDef.props;
export type GiCookieEvents = typeof __propDef.events;
export type GiCookieSlots = typeof __propDef.slots;
export default class GiCookie extends SvelteComponentTyped<GiCookieProps, GiCookieEvents, GiCookieSlots> {
}
export {};
