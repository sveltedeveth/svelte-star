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
export type MdPermCameraMicProps = typeof __propDef.props;
export type MdPermCameraMicEvents = typeof __propDef.events;
export type MdPermCameraMicSlots = typeof __propDef.slots;
export default class MdPermCameraMic extends SvelteComponentTyped<MdPermCameraMicProps, MdPermCameraMicEvents, MdPermCameraMicSlots> {
}
export {};
