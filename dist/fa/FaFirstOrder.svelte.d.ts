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
export type FaFirstOrderProps = typeof __propDef.props;
export type FaFirstOrderEvents = typeof __propDef.events;
export type FaFirstOrderSlots = typeof __propDef.slots;
export default class FaFirstOrder extends SvelteComponentTyped<FaFirstOrderProps, FaFirstOrderEvents, FaFirstOrderSlots> {
}
export {};
