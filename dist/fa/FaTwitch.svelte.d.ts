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
export type FaTwitchProps = typeof __propDef.props;
export type FaTwitchEvents = typeof __propDef.events;
export type FaTwitchSlots = typeof __propDef.slots;
export default class FaTwitch extends SvelteComponentTyped<FaTwitchProps, FaTwitchEvents, FaTwitchSlots> {
}
export {};
