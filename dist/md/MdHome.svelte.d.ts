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
export type MdHomeProps = typeof __propDef.props;
export type MdHomeEvents = typeof __propDef.events;
export type MdHomeSlots = typeof __propDef.slots;
export default class MdHome extends SvelteComponentTyped<MdHomeProps, MdHomeEvents, MdHomeSlots> {
}
export {};
