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
export type MdFindInPageProps = typeof __propDef.props;
export type MdFindInPageEvents = typeof __propDef.events;
export type MdFindInPageSlots = typeof __propDef.slots;
export default class MdFindInPage extends SvelteComponentTyped<MdFindInPageProps, MdFindInPageEvents, MdFindInPageSlots> {
}
export {};
