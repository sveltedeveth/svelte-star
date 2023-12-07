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
export type MdTrafficProps = typeof __propDef.props;
export type MdTrafficEvents = typeof __propDef.events;
export type MdTrafficSlots = typeof __propDef.slots;
export default class MdTraffic extends SvelteComponentTyped<MdTrafficProps, MdTrafficEvents, MdTrafficSlots> {
}
export {};
