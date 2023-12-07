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
export type MdLinkProps = typeof __propDef.props;
export type MdLinkEvents = typeof __propDef.events;
export type MdLinkSlots = typeof __propDef.slots;
export default class MdLink extends SvelteComponentTyped<MdLinkProps, MdLinkEvents, MdLinkSlots> {
}
export {};
