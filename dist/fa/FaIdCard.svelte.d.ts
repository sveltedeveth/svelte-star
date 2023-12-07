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
export type FaIdCardProps = typeof __propDef.props;
export type FaIdCardEvents = typeof __propDef.events;
export type FaIdCardSlots = typeof __propDef.slots;
export default class FaIdCard extends SvelteComponentTyped<FaIdCardProps, FaIdCardEvents, FaIdCardSlots> {
}
export {};
