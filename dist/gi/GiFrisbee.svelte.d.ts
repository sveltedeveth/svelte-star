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
export type GiFrisbeeProps = typeof __propDef.props;
export type GiFrisbeeEvents = typeof __propDef.events;
export type GiFrisbeeSlots = typeof __propDef.slots;
export default class GiFrisbee extends SvelteComponentTyped<GiFrisbeeProps, GiFrisbeeEvents, GiFrisbeeSlots> {
}
export {};
