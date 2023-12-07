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
export type MdVideogameAssetProps = typeof __propDef.props;
export type MdVideogameAssetEvents = typeof __propDef.events;
export type MdVideogameAssetSlots = typeof __propDef.slots;
export default class MdVideogameAsset extends SvelteComponentTyped<MdVideogameAssetProps, MdVideogameAssetEvents, MdVideogameAssetSlots> {
}
export {};
