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
export type MdTextsmsProps = typeof __propDef.props;
export type MdTextsmsEvents = typeof __propDef.events;
export type MdTextsmsSlots = typeof __propDef.slots;
export default class MdTextsms extends SvelteComponentTyped<MdTextsmsProps, MdTextsmsEvents, MdTextsmsSlots> {
}
export {};
