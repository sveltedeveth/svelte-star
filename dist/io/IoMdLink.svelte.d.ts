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
export type IoMdLinkProps = typeof __propDef.props;
export type IoMdLinkEvents = typeof __propDef.events;
export type IoMdLinkSlots = typeof __propDef.slots;
export default class IoMdLink extends SvelteComponentTyped<IoMdLinkProps, IoMdLinkEvents, IoMdLinkSlots> {
}
export {};
