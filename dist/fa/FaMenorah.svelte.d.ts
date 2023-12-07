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
export type FaMenorahProps = typeof __propDef.props;
export type FaMenorahEvents = typeof __propDef.events;
export type FaMenorahSlots = typeof __propDef.slots;
export default class FaMenorah extends SvelteComponentTyped<FaMenorahProps, FaMenorahEvents, FaMenorahSlots> {
}
export {};
