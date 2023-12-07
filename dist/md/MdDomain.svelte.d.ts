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
export type MdDomainProps = typeof __propDef.props;
export type MdDomainEvents = typeof __propDef.events;
export type MdDomainSlots = typeof __propDef.slots;
export default class MdDomain extends SvelteComponentTyped<MdDomainProps, MdDomainEvents, MdDomainSlots> {
}
export {};
