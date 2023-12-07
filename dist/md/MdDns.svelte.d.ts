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
export type MdDnsProps = typeof __propDef.props;
export type MdDnsEvents = typeof __propDef.events;
export type MdDnsSlots = typeof __propDef.slots;
export default class MdDns extends SvelteComponentTyped<MdDnsProps, MdDnsEvents, MdDnsSlots> {
}
export {};
