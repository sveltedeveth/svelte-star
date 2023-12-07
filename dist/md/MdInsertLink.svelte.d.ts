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
export type MdInsertLinkProps = typeof __propDef.props;
export type MdInsertLinkEvents = typeof __propDef.events;
export type MdInsertLinkSlots = typeof __propDef.slots;
export default class MdInsertLink extends SvelteComponentTyped<MdInsertLinkProps, MdInsertLinkEvents, MdInsertLinkSlots> {
}
export {};
