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
export type FaIntercomProps = typeof __propDef.props;
export type FaIntercomEvents = typeof __propDef.events;
export type FaIntercomSlots = typeof __propDef.slots;
export default class FaIntercom extends SvelteComponentTyped<FaIntercomProps, FaIntercomEvents, FaIntercomSlots> {
}
export {};
