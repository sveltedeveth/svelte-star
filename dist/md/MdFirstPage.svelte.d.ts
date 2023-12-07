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
export type MdFirstPageProps = typeof __propDef.props;
export type MdFirstPageEvents = typeof __propDef.events;
export type MdFirstPageSlots = typeof __propDef.slots;
export default class MdFirstPage extends SvelteComponentTyped<MdFirstPageProps, MdFirstPageEvents, MdFirstPageSlots> {
}
export {};
