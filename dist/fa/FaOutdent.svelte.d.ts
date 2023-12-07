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
export type FaOutdentProps = typeof __propDef.props;
export type FaOutdentEvents = typeof __propDef.events;
export type FaOutdentSlots = typeof __propDef.slots;
export default class FaOutdent extends SvelteComponentTyped<FaOutdentProps, FaOutdentEvents, FaOutdentSlots> {
}
export {};
