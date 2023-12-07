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
export type FaAsymmetrikProps = typeof __propDef.props;
export type FaAsymmetrikEvents = typeof __propDef.events;
export type FaAsymmetrikSlots = typeof __propDef.slots;
export default class FaAsymmetrik extends SvelteComponentTyped<FaAsymmetrikProps, FaAsymmetrikEvents, FaAsymmetrikSlots> {
}
export {};
