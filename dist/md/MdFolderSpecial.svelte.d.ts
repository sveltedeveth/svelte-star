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
export type MdFolderSpecialProps = typeof __propDef.props;
export type MdFolderSpecialEvents = typeof __propDef.events;
export type MdFolderSpecialSlots = typeof __propDef.slots;
export default class MdFolderSpecial extends SvelteComponentTyped<MdFolderSpecialProps, MdFolderSpecialEvents, MdFolderSpecialSlots> {
}
export {};
