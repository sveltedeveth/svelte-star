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
export type MdNavigationProps = typeof __propDef.props;
export type MdNavigationEvents = typeof __propDef.events;
export type MdNavigationSlots = typeof __propDef.slots;
export default class MdNavigation extends SvelteComponentTyped<MdNavigationProps, MdNavigationEvents, MdNavigationSlots> {
}
export {};
