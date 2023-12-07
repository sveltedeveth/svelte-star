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
export type MdTextureProps = typeof __propDef.props;
export type MdTextureEvents = typeof __propDef.events;
export type MdTextureSlots = typeof __propDef.slots;
export default class MdTexture extends SvelteComponentTyped<MdTextureProps, MdTextureEvents, MdTextureSlots> {
}
export {};
