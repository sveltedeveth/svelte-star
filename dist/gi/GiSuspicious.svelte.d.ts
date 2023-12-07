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
export type GiSuspiciousProps = typeof __propDef.props;
export type GiSuspiciousEvents = typeof __propDef.events;
export type GiSuspiciousSlots = typeof __propDef.slots;
export default class GiSuspicious extends SvelteComponentTyped<GiSuspiciousProps, GiSuspiciousEvents, GiSuspiciousSlots> {
}
export {};
