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
export type FaDoorOpenProps = typeof __propDef.props;
export type FaDoorOpenEvents = typeof __propDef.events;
export type FaDoorOpenSlots = typeof __propDef.slots;
export default class FaDoorOpen extends SvelteComponentTyped<FaDoorOpenProps, FaDoorOpenEvents, FaDoorOpenSlots> {
}
export {};
