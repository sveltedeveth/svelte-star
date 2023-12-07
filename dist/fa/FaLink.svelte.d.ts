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
export type FaLinkProps = typeof __propDef.props;
export type FaLinkEvents = typeof __propDef.events;
export type FaLinkSlots = typeof __propDef.slots;
export default class FaLink extends SvelteComponentTyped<FaLinkProps, FaLinkEvents, FaLinkSlots> {
}
export {};
