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
export type MdPublishProps = typeof __propDef.props;
export type MdPublishEvents = typeof __propDef.events;
export type MdPublishSlots = typeof __propDef.slots;
export default class MdPublish extends SvelteComponentTyped<MdPublishProps, MdPublishEvents, MdPublishSlots> {
}
export {};
