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
export type MdLastPageProps = typeof __propDef.props;
export type MdLastPageEvents = typeof __propDef.events;
export type MdLastPageSlots = typeof __propDef.slots;
export default class MdLastPage extends SvelteComponentTyped<MdLastPageProps, MdLastPageEvents, MdLastPageSlots> {
}
export {};
