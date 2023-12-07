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
export type FaFirstdraftProps = typeof __propDef.props;
export type FaFirstdraftEvents = typeof __propDef.events;
export type FaFirstdraftSlots = typeof __propDef.slots;
export default class FaFirstdraft extends SvelteComponentTyped<FaFirstdraftProps, FaFirstdraftEvents, FaFirstdraftSlots> {
}
export {};
