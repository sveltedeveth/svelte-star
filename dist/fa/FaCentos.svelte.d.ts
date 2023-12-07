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
export type FaCentosProps = typeof __propDef.props;
export type FaCentosEvents = typeof __propDef.events;
export type FaCentosSlots = typeof __propDef.slots;
export default class FaCentos extends SvelteComponentTyped<FaCentosProps, FaCentosEvents, FaCentosSlots> {
}
export {};
