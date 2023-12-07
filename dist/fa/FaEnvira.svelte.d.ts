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
export type FaEnviraProps = typeof __propDef.props;
export type FaEnviraEvents = typeof __propDef.events;
export type FaEnviraSlots = typeof __propDef.slots;
export default class FaEnvira extends SvelteComponentTyped<FaEnviraProps, FaEnviraEvents, FaEnviraSlots> {
}
export {};
