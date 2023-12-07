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
export type FaHandPointUpProps = typeof __propDef.props;
export type FaHandPointUpEvents = typeof __propDef.events;
export type FaHandPointUpSlots = typeof __propDef.slots;
export default class FaHandPointUp extends SvelteComponentTyped<FaHandPointUpProps, FaHandPointUpEvents, FaHandPointUpSlots> {
}
export {};
