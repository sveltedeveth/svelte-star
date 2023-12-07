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
export type MdPublicProps = typeof __propDef.props;
export type MdPublicEvents = typeof __propDef.events;
export type MdPublicSlots = typeof __propDef.slots;
export default class MdPublic extends SvelteComponentTyped<MdPublicProps, MdPublicEvents, MdPublicSlots> {
}
export {};
