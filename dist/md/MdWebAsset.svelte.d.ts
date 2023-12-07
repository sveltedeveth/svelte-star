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
export type MdWebAssetProps = typeof __propDef.props;
export type MdWebAssetEvents = typeof __propDef.events;
export type MdWebAssetSlots = typeof __propDef.slots;
export default class MdWebAsset extends SvelteComponentTyped<MdWebAssetProps, MdWebAssetEvents, MdWebAssetSlots> {
}
export {};
