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
export type FaPhabricatorProps = typeof __propDef.props;
export type FaPhabricatorEvents = typeof __propDef.events;
export type FaPhabricatorSlots = typeof __propDef.slots;
export default class FaPhabricator extends SvelteComponentTyped<FaPhabricatorProps, FaPhabricatorEvents, FaPhabricatorSlots> {
}
export {};
