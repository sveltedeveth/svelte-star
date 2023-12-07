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
export type TiLinkProps = typeof __propDef.props;
export type TiLinkEvents = typeof __propDef.events;
export type TiLinkSlots = typeof __propDef.slots;
export default class TiLink extends SvelteComponentTyped<TiLinkProps, TiLinkEvents, TiLinkSlots> {
}
export {};
